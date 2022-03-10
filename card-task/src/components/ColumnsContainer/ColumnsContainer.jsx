import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columns } from "../../utils/Columns/colomns";
import { onDragEnd } from "../../utils/onDragEnd/onDragEnd";
import { useSelector } from "react-redux";
import "./Columns.css";

function ColumnsContainer() {
  const [taskColumns, setTaskColumns] = useState(columns);
  const state = useSelector((state) => state.card.userData);
  console.log(
    "🚀 ~ file: ColumnsContainer.jsx ~ line 11 ~ ColumnsContainer ~ state",
    state
  );

  return (
    <div className="context-wrapper">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, taskColumns, setTaskColumns)}
      >
        {Object.entries(taskColumns).map(([columnId, column], index) => {
          return (
            <div className="column-wrap" key={columnId}>
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className="dropbox"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver ? "#eee" : "#ddd",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className="dragbox"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? "#929292"
                                        : "#454545",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
export default ColumnsContainer;
