import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Options = () => {
    return (
        <div className="mx-10">
            <div className="flex gap-5">
                <Button className="py-8 text-lg">Project tracker</Button>
                <Link href="/todos">
                    <Button className="py-8 text-lg">Todo tracker</Button>
                </Link>
            </div>
        </div>
    );
};

export default Options;
