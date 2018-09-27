import { List } from './HelloWorldWebPart';

export default class Mock {
  private static _items: List[] = [{ Title: 'Apple', Id: '1' },
                                    { Title: 'Banana', Id: '2' }];
  public static get(): Promise<List[]> {
    return new Promise<List[]>((resolve) => {
      resolve(Mock._items);
    });
  }
}