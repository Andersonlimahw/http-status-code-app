import { ItemModel } from "../model/Item";

import httpDocumentation from '../../src/assets/json/http.status.json';
import mdnHttpDocumentation from '../../src/assets/json/mdn.http.status.json';

export interface HttpDocItemModel {
    code: string;
    description: string;
    reference: string;
}
const defaultReferenceUrl = 'https://www.rfc-editor.org/rfc/rfc9110';

function getDetails({ code }: HttpDocItemModel) {
    const detail = (mdnHttpDocumentation as any)[code]?.details;
    if(!detail) {
        return {
            reference: defaultReferenceUrl, 
            status: undefined,
        };
    }
   
    return {
        reference: detail.spec_url, 
        status: detail.status
    }
}

function mapper() {
    const data =  httpDocumentation as HttpDocItemModel[];
    const mappedStatus : ItemModel[] = data.map((item, index) => ({
        id: index, 
        title: item.description, 
        description: item.description, 
        family: `${item.code.slice(0,1)}xx`,
        imageUrl: `http://lorempixel.com.br/500/400/?${index}`,
        code: item.code,
        alt: "imagem", 
        details: getDetails(item),
    }));
    return mappedStatus;
}

export const httpList = mapper();