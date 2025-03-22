"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Settings } from "lucide-react";
import React, { useState } from "react";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="flex justify-center items-center">
            <div className="flex gap-2 flex-col justify-center">
                <Input placeholder="Title" name="title" />
                <Textarea placeholder="Description" name="description" />
                <div className="flex items-center gap-2">
                    <DatePicker text="Select end date" />
                    <Popover>
                        <PopoverTrigger className="border rounded-md p-2">
                            <Settings size={20} />
                        </PopoverTrigger>
                        <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>
                </div>
                <Button>Create</Button>
            </div>
        </div>
    );
};

export default AddTodo;
