export interface RangeData {
    x: string | number | Date;
    y: number;
}

export interface RangeTooltipDataSource {
    [key: string]: string | number | unknown;
}

export type ValueType = 'Double' | 'DateTime';

export interface IRangeTooltip {
    border?: RangeTooltipBorderModel;
    displayMode?: string;
    enable?: boolean;
    fill?: string;
    format?: string;
    opacity?: number;
    template?: string;
    textStyle?: RangeTooltipFontModel;
}

interface RangeTooltipFontModel {
    color: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    opacity: number;
    size: string;
    textAlignment: string;
    textOverflow: string;
}

interface RangeTooltipBorderModel {
    color: string; // hex, rgba
    width: number; // px
}

export interface RangeSelected {
    name: string;
    selectedData: RangeData[];
}

export interface ThumbModel {
    border: BorderModel,
    fill: string,
    height: number,
    type: string,
    width: number
}

export interface BorderModel {
    color: string,
    width: number
}