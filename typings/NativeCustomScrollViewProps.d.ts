/**
 * This file was generated from NativeCustomScrollView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, EditableValue, ListValue, ListWidgetValue } from "mendix";

export type ContentTypeEnum = "basic" | "list" | "section";

export interface SectionContainerListType {
    sectionContainerID: DynamicValue<string>;
    sectionContent: ReactNode;
}

export interface SectionContainerListPreviewType {
    sectionContainerID: string;
    sectionContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}

export interface NativeCustomScrollViewProps<Style> {
    name: string;
    style: Style[];
    contentType: ContentTypeEnum;
    triggerAttr: EditableValue<Date>;
    animateScroll?: DynamicValue<boolean>;
    basicContent?: ReactNode;
    ds?: ListValue;
    dsContent?: ListWidgetValue;
    scrollToIdAttr?: EditableValue<string>;
    sectionContainerList: SectionContainerListType[];
    scrollToSectionAttr?: EditableValue<string>;
}

export interface NativeCustomScrollViewPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    contentType: ContentTypeEnum;
    triggerAttr: string;
    animateScroll: string;
    basicContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    ds: {} | { type: string } | null;
    dsContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    scrollToIdAttr: string;
    sectionContainerList: SectionContainerListPreviewType[];
    scrollToSectionAttr: string;
}
