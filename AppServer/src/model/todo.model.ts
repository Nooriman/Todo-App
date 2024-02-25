import mongoose, { Document, Schema } from "mongoose";

export interface TagSchema {
    name: string;
}

export interface TodoSchema extends Document {
    title: string;
    description: string;
    list: string;
    dueDate: string;
    tag: TagSchema[];
}

const tagSchema = new Schema<TagSchema>({
    name: {
        type: String,
        required: false
    }
})

const todoSchema = new Schema<TodoSchema>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    list: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    tag: {
        type: [tagSchema],
        required: false,
    },
})

const TodoModel = mongoose.model<TodoSchema>('Todo', todoSchema, 'todo-list');

export default TodoModel;