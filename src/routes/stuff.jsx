import React from 'react';

import { Accordian } from '../components/panel-accordian';
import { SyncInput } from '../components/sync-input';
import { FilterableList } from '../components/filterable-list';
import { food_items } from '../components/filter-data';
import { SearchableProductTable } from '../components/product-table';
import { product_items } from '../components/product-data';
import {
  TickTockClockArrow,
  TickTockClockFunction,
  TickTockClockClass
} from '../components/ticker';
import { Comment, comment_data } from '../components/comment';
import { Form, Toggle, LogThisButton } from '../components/forms';

const { author, comment_text, date_posted } = comment_data;

const Stuff = () => {
  return (
    <>
      <Accordian />
      <SyncInput />
      <FilterableList items={food_items} />
      <SearchableProductTable products={product_items} />
      <TickTockClockArrow />
      <TickTockClockFunction />
      <TickTockClockClass />
      <Comment
        author={author}
        comment_text={comment_text}
        date_posted={date_posted}
      />
      <Form />
      <Toggle />
      <LogThisButton />
    </>
  );
};

export { Stuff };
