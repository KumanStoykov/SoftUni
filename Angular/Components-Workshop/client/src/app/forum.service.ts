import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme, IPost } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()

export class ForumService {

    constructor(private http: HttpClient) { }

    loadThemes() {
        return this.http.get<ITheme[]>(`${API_URL}/themes`);
    }
    loadLatestTheme(limit: number) {
        const query = limit ? `?limit=${limit}` : '';
        return this.http.get<IPost[]>(`${API_URL }/posts${query}`);
    }
}
