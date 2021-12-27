export type NavItemData = {
    title?: string,
    route?: string,
    activePlugins?: string[],
    inActivePlugins?: string[],
    disabledPlugins?: string[]
}

export type NavApiData = {
    title?: string,
    active?: string[],
    inactive?: string[],
    disabled?: string[]
}

export type PluginApiData = {
    id?: string,
    title?: string,
    description?: string,
}

export type AppState = {
    navItems: NavItemData[],
    plugins: any[]
};

export type ActionType = {
    type: string;
    data?: any;
};