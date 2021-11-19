import { MenuItem } from '@shared/menu.model';

export interface IContextMenuItemClickEvent {
    menuItem: MenuItem;
    handle: Symbol;
}