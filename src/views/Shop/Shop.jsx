import ItemForm from '../../components/Form/ItemForm';
import ItemList from '../../components/List/ItemList';
import { useList } from '../../context/ListContext';
import Header from '../../Header/Header';

export default function Shop() {
  const { handleClearList, handleAddItem, items, handleDeleteItem, handleEditItem } = useList();
  return (
    <div>
      <Header handleClearList={handleClearList} items={items} />
      <ItemForm handleAddItem={handleAddItem} />
      <ItemList items={items} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
    </div>
  );
}
