/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface ExternalAuthStrategy {
        "icon": string;
        "id": string;
        "invitationEmail": string;
        "invitationToken": string;
        "name": string;
        "redirectUrl": string;
        "url": string;
    }
    interface HomeNav {
        "authStrategyInfo": any;
        "tenantAlias": string;
        "tenantLogo": string;
    }
    interface HomeSearch {
    }
    interface LocalAuthStrategy {
        "enabledStrategies": any;
    }
    interface OaeDashboard {
        "activityItems": any[];
    }
    interface OaeGroups {
    }
    interface OaeGroupsAvatar {
    }
    interface OaeGroupsBanner {
    }
    interface OaeGroupsHeader {
    }
    interface OaeGroupsJoin {
    }
    interface OaeGroupsTabs {
    }
    interface OaeHomepage {
        "authStrategyInfo": any;
        "currentUser": any;
        "tenantConfig": any;
    }
    interface OaeLayout {
    }
    interface OaeLibrary {
    }
    interface OaeLibraryMosaic {
    }
    interface OaeLibraryTable {
    }
    interface OaeNewsfeed {
        "activityItem": any;
        "key": any;
    }
    interface OaeSidebar {
        "avatar": string;
        "image": string;
    }
    interface OaeTag {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLExternalAuthStrategyElement extends Components.ExternalAuthStrategy, HTMLStencilElement {
    }
    var HTMLExternalAuthStrategyElement: {
        prototype: HTMLExternalAuthStrategyElement;
        new (): HTMLExternalAuthStrategyElement;
    };
    interface HTMLHomeNavElement extends Components.HomeNav, HTMLStencilElement {
    }
    var HTMLHomeNavElement: {
        prototype: HTMLHomeNavElement;
        new (): HTMLHomeNavElement;
    };
    interface HTMLHomeSearchElement extends Components.HomeSearch, HTMLStencilElement {
    }
    var HTMLHomeSearchElement: {
        prototype: HTMLHomeSearchElement;
        new (): HTMLHomeSearchElement;
    };
    interface HTMLLocalAuthStrategyElement extends Components.LocalAuthStrategy, HTMLStencilElement {
    }
    var HTMLLocalAuthStrategyElement: {
        prototype: HTMLLocalAuthStrategyElement;
        new (): HTMLLocalAuthStrategyElement;
    };
    interface HTMLOaeDashboardElement extends Components.OaeDashboard, HTMLStencilElement {
    }
    var HTMLOaeDashboardElement: {
        prototype: HTMLOaeDashboardElement;
        new (): HTMLOaeDashboardElement;
    };
    interface HTMLOaeGroupsElement extends Components.OaeGroups, HTMLStencilElement {
    }
    var HTMLOaeGroupsElement: {
        prototype: HTMLOaeGroupsElement;
        new (): HTMLOaeGroupsElement;
    };
    interface HTMLOaeGroupsAvatarElement extends Components.OaeGroupsAvatar, HTMLStencilElement {
    }
    var HTMLOaeGroupsAvatarElement: {
        prototype: HTMLOaeGroupsAvatarElement;
        new (): HTMLOaeGroupsAvatarElement;
    };
    interface HTMLOaeGroupsBannerElement extends Components.OaeGroupsBanner, HTMLStencilElement {
    }
    var HTMLOaeGroupsBannerElement: {
        prototype: HTMLOaeGroupsBannerElement;
        new (): HTMLOaeGroupsBannerElement;
    };
    interface HTMLOaeGroupsHeaderElement extends Components.OaeGroupsHeader, HTMLStencilElement {
    }
    var HTMLOaeGroupsHeaderElement: {
        prototype: HTMLOaeGroupsHeaderElement;
        new (): HTMLOaeGroupsHeaderElement;
    };
    interface HTMLOaeGroupsJoinElement extends Components.OaeGroupsJoin, HTMLStencilElement {
    }
    var HTMLOaeGroupsJoinElement: {
        prototype: HTMLOaeGroupsJoinElement;
        new (): HTMLOaeGroupsJoinElement;
    };
    interface HTMLOaeGroupsTabsElement extends Components.OaeGroupsTabs, HTMLStencilElement {
    }
    var HTMLOaeGroupsTabsElement: {
        prototype: HTMLOaeGroupsTabsElement;
        new (): HTMLOaeGroupsTabsElement;
    };
    interface HTMLOaeHomepageElement extends Components.OaeHomepage, HTMLStencilElement {
    }
    var HTMLOaeHomepageElement: {
        prototype: HTMLOaeHomepageElement;
        new (): HTMLOaeHomepageElement;
    };
    interface HTMLOaeLayoutElement extends Components.OaeLayout, HTMLStencilElement {
    }
    var HTMLOaeLayoutElement: {
        prototype: HTMLOaeLayoutElement;
        new (): HTMLOaeLayoutElement;
    };
    interface HTMLOaeLibraryElement extends Components.OaeLibrary, HTMLStencilElement {
    }
    var HTMLOaeLibraryElement: {
        prototype: HTMLOaeLibraryElement;
        new (): HTMLOaeLibraryElement;
    };
    interface HTMLOaeLibraryMosaicElement extends Components.OaeLibraryMosaic, HTMLStencilElement {
    }
    var HTMLOaeLibraryMosaicElement: {
        prototype: HTMLOaeLibraryMosaicElement;
        new (): HTMLOaeLibraryMosaicElement;
    };
    interface HTMLOaeLibraryTableElement extends Components.OaeLibraryTable, HTMLStencilElement {
    }
    var HTMLOaeLibraryTableElement: {
        prototype: HTMLOaeLibraryTableElement;
        new (): HTMLOaeLibraryTableElement;
    };
    interface HTMLOaeNewsfeedElement extends Components.OaeNewsfeed, HTMLStencilElement {
    }
    var HTMLOaeNewsfeedElement: {
        prototype: HTMLOaeNewsfeedElement;
        new (): HTMLOaeNewsfeedElement;
    };
    interface HTMLOaeSidebarElement extends Components.OaeSidebar, HTMLStencilElement {
    }
    var HTMLOaeSidebarElement: {
        prototype: HTMLOaeSidebarElement;
        new (): HTMLOaeSidebarElement;
    };
    interface HTMLOaeTagElement extends Components.OaeTag, HTMLStencilElement {
    }
    var HTMLOaeTagElement: {
        prototype: HTMLOaeTagElement;
        new (): HTMLOaeTagElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "external-auth-strategy": HTMLExternalAuthStrategyElement;
        "home-nav": HTMLHomeNavElement;
        "home-search": HTMLHomeSearchElement;
        "local-auth-strategy": HTMLLocalAuthStrategyElement;
        "oae-dashboard": HTMLOaeDashboardElement;
        "oae-groups": HTMLOaeGroupsElement;
        "oae-groups-avatar": HTMLOaeGroupsAvatarElement;
        "oae-groups-banner": HTMLOaeGroupsBannerElement;
        "oae-groups-header": HTMLOaeGroupsHeaderElement;
        "oae-groups-join": HTMLOaeGroupsJoinElement;
        "oae-groups-tabs": HTMLOaeGroupsTabsElement;
        "oae-homepage": HTMLOaeHomepageElement;
        "oae-layout": HTMLOaeLayoutElement;
        "oae-library": HTMLOaeLibraryElement;
        "oae-library-mosaic": HTMLOaeLibraryMosaicElement;
        "oae-library-table": HTMLOaeLibraryTableElement;
        "oae-newsfeed": HTMLOaeNewsfeedElement;
        "oae-sidebar": HTMLOaeSidebarElement;
        "oae-tag": HTMLOaeTagElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface ExternalAuthStrategy {
        "icon"?: string;
        "id"?: string;
        "invitationEmail"?: string;
        "invitationToken"?: string;
        "name"?: string;
        "redirectUrl"?: string;
        "url"?: string;
    }
    interface HomeNav {
        "authStrategyInfo"?: any;
        "tenantAlias"?: string;
        "tenantLogo"?: string;
    }
    interface HomeSearch {
    }
    interface LocalAuthStrategy {
        "enabledStrategies"?: any;
    }
    interface OaeDashboard {
        "activityItems"?: any[];
    }
    interface OaeGroups {
    }
    interface OaeGroupsAvatar {
    }
    interface OaeGroupsBanner {
    }
    interface OaeGroupsHeader {
    }
    interface OaeGroupsJoin {
    }
    interface OaeGroupsTabs {
    }
    interface OaeHomepage {
        "authStrategyInfo"?: any;
        "currentUser"?: any;
        "tenantConfig"?: any;
    }
    interface OaeLayout {
    }
    interface OaeLibrary {
    }
    interface OaeLibraryMosaic {
    }
    interface OaeLibraryTable {
    }
    interface OaeNewsfeed {
        "activityItem"?: any;
        "key"?: any;
    }
    interface OaeSidebar {
        "avatar"?: string;
        "image"?: string;
    }
    interface OaeTag {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "external-auth-strategy": ExternalAuthStrategy;
        "home-nav": HomeNav;
        "home-search": HomeSearch;
        "local-auth-strategy": LocalAuthStrategy;
        "oae-dashboard": OaeDashboard;
        "oae-groups": OaeGroups;
        "oae-groups-avatar": OaeGroupsAvatar;
        "oae-groups-banner": OaeGroupsBanner;
        "oae-groups-header": OaeGroupsHeader;
        "oae-groups-join": OaeGroupsJoin;
        "oae-groups-tabs": OaeGroupsTabs;
        "oae-homepage": OaeHomepage;
        "oae-layout": OaeLayout;
        "oae-library": OaeLibrary;
        "oae-library-mosaic": OaeLibraryMosaic;
        "oae-library-table": OaeLibraryTable;
        "oae-newsfeed": OaeNewsfeed;
        "oae-sidebar": OaeSidebar;
        "oae-tag": OaeTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "external-auth-strategy": LocalJSX.ExternalAuthStrategy & JSXBase.HTMLAttributes<HTMLExternalAuthStrategyElement>;
            "home-nav": LocalJSX.HomeNav & JSXBase.HTMLAttributes<HTMLHomeNavElement>;
            "home-search": LocalJSX.HomeSearch & JSXBase.HTMLAttributes<HTMLHomeSearchElement>;
            "local-auth-strategy": LocalJSX.LocalAuthStrategy & JSXBase.HTMLAttributes<HTMLLocalAuthStrategyElement>;
            "oae-dashboard": LocalJSX.OaeDashboard & JSXBase.HTMLAttributes<HTMLOaeDashboardElement>;
            "oae-groups": LocalJSX.OaeGroups & JSXBase.HTMLAttributes<HTMLOaeGroupsElement>;
            "oae-groups-avatar": LocalJSX.OaeGroupsAvatar & JSXBase.HTMLAttributes<HTMLOaeGroupsAvatarElement>;
            "oae-groups-banner": LocalJSX.OaeGroupsBanner & JSXBase.HTMLAttributes<HTMLOaeGroupsBannerElement>;
            "oae-groups-header": LocalJSX.OaeGroupsHeader & JSXBase.HTMLAttributes<HTMLOaeGroupsHeaderElement>;
            "oae-groups-join": LocalJSX.OaeGroupsJoin & JSXBase.HTMLAttributes<HTMLOaeGroupsJoinElement>;
            "oae-groups-tabs": LocalJSX.OaeGroupsTabs & JSXBase.HTMLAttributes<HTMLOaeGroupsTabsElement>;
            "oae-homepage": LocalJSX.OaeHomepage & JSXBase.HTMLAttributes<HTMLOaeHomepageElement>;
            "oae-layout": LocalJSX.OaeLayout & JSXBase.HTMLAttributes<HTMLOaeLayoutElement>;
            "oae-library": LocalJSX.OaeLibrary & JSXBase.HTMLAttributes<HTMLOaeLibraryElement>;
            "oae-library-mosaic": LocalJSX.OaeLibraryMosaic & JSXBase.HTMLAttributes<HTMLOaeLibraryMosaicElement>;
            "oae-library-table": LocalJSX.OaeLibraryTable & JSXBase.HTMLAttributes<HTMLOaeLibraryTableElement>;
            "oae-newsfeed": LocalJSX.OaeNewsfeed & JSXBase.HTMLAttributes<HTMLOaeNewsfeedElement>;
            "oae-sidebar": LocalJSX.OaeSidebar & JSXBase.HTMLAttributes<HTMLOaeSidebarElement>;
            "oae-tag": LocalJSX.OaeTag & JSXBase.HTMLAttributes<HTMLOaeTagElement>;
        }
    }
}
