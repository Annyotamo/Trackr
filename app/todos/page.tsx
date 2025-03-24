import AddTodo from "@/components/custom/Todos/AddTodo";
import { Button } from "@/components/ui/button";
import React from "react";

const todos = () => {
    return (
        <div className="mx-8">
            <h1 className="text-4xl">Todo tracker</h1>
            <h2 className="text-xl mb-10 text-gray-400">A simple way to add and manage your todos</h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center">
                <div className="border rounded-xl p-8 text-center">
                    <h3 className="text-2xl mb-4">Create a todo</h3>
                    <AddTodo />
                </div>
                <div className="border rounded-xl p-8 text-center">
                    <h3 className="text-2xl mb-4">Groups</h3>
                    <div className="flex gap-5">
                        <Button className="md:py-8 text-lg">+ Add</Button>
                        <Button variant="outline" className="md:py-8 text-lg">
                            Daily
                        </Button>
                        <Button variant="outline" className="md:py-8 text-lg">
                            Random
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl my-10 border-b pb-2">Daily Group</h2>
            </div>
        </div>
    );
};

export default todos;
