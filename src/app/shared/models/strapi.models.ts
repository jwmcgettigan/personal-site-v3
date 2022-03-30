import { Entity } from './entity.model';


export class StrapiPagination {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
}

export class StrapiMetadata {
	pagination: StrapiPagination;
}

export class StrapiObject {
	id: number;
	attributes: any;
}

export class StrapiResponseSingle {
	data: StrapiObject;
	meta: StrapiMetadata;
}

export class StrapiResponseMulti {
	data: StrapiObject[];
	meta: StrapiMetadata;
}

export class StrapiResponse {
	data: StrapiObject | StrapiObject[];
	meta?: StrapiMetadata;
}

export class StrapiThumbnail {
	ext: string;
	hash: string;
	height: number;
	mime: string;
	name: string;
	path?: string;
	size: number;
	url: string;
	width: number;
}

export class StrapiFormats {
	thumbnail: StrapiThumbnail;
}

export class StrapiMedia extends Entity {
	alternativeText: string;
	caption: string;
	ext: string;
	formats: StrapiFormats;
	hash: string;
	height: number;
	mime: string;
	name: string;
	previewUrl?: string;
	provider: string;
	provider_metadata?: string;
	size: number;
	url: string;
	width: number;
}