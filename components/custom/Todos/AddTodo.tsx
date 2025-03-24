"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Settings } from "lucide-react";
import React, { useState } from "react";

const AddTodo = () => {
    const [content, setContent] = useState({ title: "", description: "" });
    const [date, setDate] = useState<Date>();

    function contentChangeHandler(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        if (e.target.name === "title") {
            setContent((prev) => ({ title: e.target.value, description: prev.description }));
        }
        if (e.target.name === "description") {
            setContent((prev) => ({ description: e.target.value, title: prev.title }));
        }
    }

    function createTodo() {
        console.log({ title: content.title, description: content.description, date });
        setDate(undefined);
        setContent({ title: "", description: "" });
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex gap-2 flex-col justify-center">
                <Input placeholder="Title" name="title" onChange={contentChangeHandler} value={content.title} />
                <Textarea
                    placeholder="Description"
                    name="description"
                    onChange={contentChangeHandler}
                    value={content.description}
                />
                <div className="flex items-center gap-2">
                    <DatePicker text="Select end date" date={date} setDate={setDate} />
                    <Popover>
                        <PopoverTrigger className="border rounded-md p-2">
                            <Settings size={20} />
                        </PopoverTrigger>
                        <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>
                </div>
                <Button onClick={createTodo}>Create</Button>
            </div>
        </div>
    );
};

export default AddTodo;
