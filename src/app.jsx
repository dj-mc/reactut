import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Accordian } from './panel-accordian';
import { SyncInput } from './sync-input';
import { FilterableList } from './filterable-list';
import { food_items } from './filter-data';
import { SearchableProductTable } from './product-table';
import { product_items } from './product-data';
import {
  TickTockClockArrow,
  TickTockClockFunction,
  TickTockClockClass
} from './ticker';
import { Comment, comment_data } from './comment';
import { Form, Toggle, LogThisButton } from './forms';

const { author, comment_text, date_posted } = comment_data;
const root = ReactDOMClient.createRoot(document.getElementById('root'));

const App = () => {
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

const refresh = () => {
  root.render(<App />);
};

refresh();
