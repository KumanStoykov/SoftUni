export interface ITheme {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    userId: {
        themes: string[],
        posts: string[],
        _id: string,
        tel: string,
        email: string,
        username: string,
        password: string,
        created_at: Date;
        updateAt: Date;
    };
    created_at: Date;
    updateAt: Date;
}
