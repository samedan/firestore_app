import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  // fro editidint
  editState = false;
  itemToEdit: Item;

  constructor(public itemService: ItemService ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(itemsReceived => {
      // console.log(items);
      this.items = itemsReceived;
    });
  }

  deleteItem(event, item: Item) {
    this.clearState();
    if (event) {
      this.itemService.deleteItem(item);
    }
  }

  editItem(item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }
}
