import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy, Output,
  ViewChild
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ta9-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;

  @Input() showIcon = false;

  @Input() dbounceTime = 300;

  /**
   * Text placeholder for search field
   */
  @Input() placeholder = '';

  /**
   * Minimum text length field for search
   */
  @Input() minLength?: number;

  /**
   * If autoSearch is true allow search on fly after typing
   * If autoSearch is false search can be made just after pressing enter button
   */
  @Input() autoSearch = true;

  /**
   * If iconPosition is true the icon is on the left
   * If iconPosition is false the icon is on the right
   */
  @Input() iconPosition: 'prefix' | 'suffix' = 'prefix';

  @Input() set isRTL(data: boolean) {
    this.isRTL = data
    if(this.isRTL) {
      if(this.iconPosition === 'prefix') {
        this.iconPosition = 'suffix';
      } else {
        this.iconPosition = 'prefix';
      }
    }
    this.ngOnDestroy();
  }
  get isRTL(): boolean {
    return this.isRTL;
  }

  /**
   * Event to be emitted with search phrase for making filter or search on parent
   */
  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter();

  /**
   * Detect if field is focused
   */
  fieldFocused = false;

  state: 'normal' | 'input-group' = 'normal';

  private currentValue = '';

  private readonly destroy$: Subject<void> = new Subject();

  ngAfterViewInit(): void {
    const search$ = fromEvent<{ target: { value: string } }>(
      this.searchInput.nativeElement,
      'keyup'
    );

    search$
      .pipe(
        tap((element) => {
          this.currentValue = element.target.value;
        }),
        debounceTime(this.dbounceTime),
        filter(() => this.autoSearch),
        takeUntil(this.destroy$)
      )
      .subscribe((element) => {
        this.searchValueChanged.emit(element.target.value);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Manage press enter
   */
  submitSearch(event: Event) {
    event.stopPropagation();
    this.searchValueChanged.emit(this.currentValue);
  }

  /**
   * Manage autosearch
   */
  triggerSearch(event: Event) {
    if(this.autoSearch) {
      this.submitSearch(event);
    }
  }

  /**
   * Focus search field
   * @param status boolean
   */
  focusField(status = true): void {
    this.fieldFocused = status;
  }
}
