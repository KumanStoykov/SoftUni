import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';

@Injectable({
    providedIn: 'root'
})

export class ForumService {

    constructor(private http: HttpClient) { }

    loadThemes() {
        return this.http.get<ITheme[]>(`http://localhost:3000/api/themes`);
    }
    loadLatestTheme() {
        return this.http.get<ITheme[]>(`http://localhost:3000/api/posts?limit=5`);
    }
}
