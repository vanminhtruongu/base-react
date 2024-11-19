import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid"; // Sử dụng uuid để tạo id duy nhất

export const useTodoStore = create(
  persist(
    (set, get) => ({
        todos: [],

        addTodo: (text) =>
            set((state) => ({
            todos: [
                ...state.todos,
                { id: uuidv4(), text, isSelected: false },
            ],
        })),

        editTodo: (id, newText) =>
            set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            ),
        })),

        deleteTodo: (id) =>
            set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
            })),

        toggleSelectTodo: (id) =>
            set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                ? { ...todo, isSelected: !todo.isSelected }
                : todo
            ),
        })),

        selectAll: () =>
            set((state) => ({
            todos: state.todos.map((todo) => ({
                ...todo,
                isSelected: true,
            })),
        })),

        deselectAll: () =>
            set((state) => ({
            todos: state.todos.map((todo) => ({
                ...todo,
                isSelected: false,
            })),
            })),

        deleteSelected: () =>
            set((state) => ({
            todos: state.todos.filter((todo) => !todo.isSelected),
        })),
    }),
    {
        name: "todo-storage",
        getStorage: () => localStorage,
    }
  )
);