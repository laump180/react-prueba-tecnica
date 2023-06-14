import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SelectBase from "./components/Select/Select";
import TableBase from "./components/Table/Table";
import IconTrash from "./components/Icons/trash";
import Modal from "./components/Modal/Modal";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [SelectValue, setSelectValue] = useState(null);
  const [inputErrorValue, setInputErrorValue] = useState("");
  const [SelectErrorValue, setSelectErrorValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState([]);
  const [idTask, setIdtask] = useState(task.length + 1);
  const [deleteIdTask, setDeleteIdTask] = useState(null);
  const options = [
    { value: "Mensajeria", label: "Mensajeria" },
    { value: "Redes sociales", label: "Redes sociales" },
    { value: "Entretenimiento", label: "Entretenimiento" },
  ];

  const columns =  [
    {
      accessorKey: 'id', //simple recommended way to define a column
      header: '#',
      
    },
    {
      accessorKey: 'object', //simple recommended way to define a column
      header: 'Objeto',

    },
    {
      accessorKey: 'category', //simple recommended way to define a column
      header: 'Categoria',
  
    },
    {
      id: 'actions',
      header: '',
      columnDefType: 'display', //turns off data column features like sorting, filtering, etc.
      enableColumnOrdering: true, //but you can turn back any of those features on if you want like this
      Cell: ({ row }) => (
       <div className="icon-trash"><IconTrash onClick={() =>handleOpenModal(row.original.id)}/></div>
      ),
    },
  ]


  const handleClick = () => {
    if (!inputValue) {
      setInputErrorValue("campo requerido");
    } else {
      setInputErrorValue("");
    }

    if (!SelectValue) {
      setSelectErrorValue("campo requerido");
    } else {
      setSelectErrorValue(null);
    }

    if (inputValue && SelectValue) {
      const newTask = {
        id: idTask,
        object: inputValue,
        category: SelectValue.value,
      };
      setIdtask(idTask+1)
      setTask([...task, newTask]);
      setInputValue("");
      setSelectValue(null);
    }
  };

  const handleInput = (data) => {
    setInputValue(data.target.value);
  };

  const handleSelect = (data) => {
    setSelectValue(data);
  };

  const handleOpenModal = (id) => {
    setModalOpen(true);
    setDeleteIdTask(id)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClickConfirm = () => {
   const filterTask = task.filter((data)=>data.id !== deleteIdTask)
   setTask(filterTask)
   setModalOpen(false);
  };
  
console.log(task)
  return (
    <div className="app-container">
      <div className="header-container">
        <Input
          placeholder={"Escribe el nombre de la App"}
          value={inputValue}
          handleOnChange={handleInput}
          error={inputErrorValue}
        />
        <SelectBase
          options={options}
          handleOnChange={handleSelect}
          value={SelectValue}
          placeholder="Seleccione una categoria"
          error={SelectErrorValue}
        />
        <Button text={"Agregar"} handleClick={() => handleClick()} />
      </div>
      <div className="app-content">
        <TableBase data={task} columns={columns}></TableBase>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2 className="modal-title">¿Estas seguro que deseas eliminar este objeto?</h2>
       <div className="modal-buttons">
       <Button text={"Confirmar"} handleClick={() => handleClickConfirm()} />
        <Button text={"Cancelar"} handleClick={() => handleCloseModal()} />
       </div>
      </Modal>
    </div>
  );
}

export default App;
