import { createContext, useContext, useReducer } from 'react';

const initialEntry = [
  { id: 0, text: 'Meat 🍖', done: false },
  { id: 1, text: 'Rice 🍚', done: false },
  { id: 2, text: 'Sake 🍶 ', done: false },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edited': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    case 'clear': {
      return [];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialEntry);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  const handleClearList = () => {
    dispatch({
      type: 'clear',
    });
  };

  return (
    <ListContext.Provider
      value={{ items, handleClearList, handleAddItem, handleDeleteItem, handleEditItem }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) throw new Error('You must wrap your component with a ListProvider');

  return context;
};
