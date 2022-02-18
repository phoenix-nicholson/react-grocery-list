import ItemForm from '../../components/Form/ItemForm';
import ItemList from '../../components/List/ItemList';
import { useList } from '../../context/ListContext';

export default function Shop() {
  const { handleAddItem, items, handleDeleteItem, handleEditItem } = useList();
  return (
    <div>
      <ItemForm handleAddItem={handleAddItem} />
      <ItemList items={items} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
    </div>
  );
}
