import { MenuItem } from '../menu/menu.model';

export interface IContextMenuItemClickEvent {
    menuItem: MenuItem;
    handle: Symbol;
}