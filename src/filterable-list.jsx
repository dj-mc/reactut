import React, { useState } from 'react';

const SearchBar = ({ search_for, on_change }) => {
  return (
    <label>
      Search: <input value={search_for} onChange={on_change} />
    </label>
  );
};

const List = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{JSON.stringify(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const filter_items = (items, query) => {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  );
};

const FilterableList = ({ items }) => {
  const [query, set_query] = useState('');
  const search_results = filter_items(items, query);
  const handle_input_change = (e) => {
    set_query(e.target.value);
  };
  return (
    <>
      <h2>Filterable List</h2>
      <SearchBar search_for={query} on_change={handle_input_change} />
      <hr />
      <List items={search_results} />
    </>
  );
};

export { FilterableList };
