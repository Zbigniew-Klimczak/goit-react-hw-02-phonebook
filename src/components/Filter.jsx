const Filter = ({ onChange, filterValue }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      placeholder="Enter name"
      value={filterValue}
      onChange={onChange}
    />
  </label>
);
export default Filter;
