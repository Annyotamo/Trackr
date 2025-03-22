"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const todos = () => {
    const [todos, setTodos] = useState([]);
    const [allowCreate, setAllowCreate] = useState(false);
    let content = <p>You've not created any todos</p>;
    if (todos.length > 0) content = <div>{todos.length}</div>;
    return (
        <div className="mx-10">
            <header className="text-4xl mb-10">Create, commit and track your todos</header>
            <div className="">
                <h3 className="text-2xl mb-5">Groups</h3>
                <div className="flex gap-5">
                    <Button className="py-8 text-lg">Daily</Button>
                    <Button className="py-8 text-lg">Random</Button>
                </div>
            </div>
        </div>
    );
};

export default todos;
