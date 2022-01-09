import { InjectionToken } from '@angular/core';
import { Link } from '../interfaces/link';

export const MAIN_LINKS_TOKEN = new InjectionToken<Link[]>('Main links');
