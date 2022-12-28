import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
// import { HttpAdapter } from '../../../dist/common/interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter {

    private axios: AxiosInstance = axios;
    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url);
            return data;
        } catch (error) {
            throw new Error('Check logs.');
        }
    }
}