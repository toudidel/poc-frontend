import {DataService} from "~/service/DataService";

export class EventService extends DataService {

    securedOne = async () => super.get('/secured/one')
}