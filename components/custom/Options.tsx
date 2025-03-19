import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Options = () => {
    return (
        <div>
            <Button variant="outline">Project tracker</Button>
            <Link href="/todos">
                <Button variant="outline">Todo tracker</Button>
            </Link>
        </div>
    );
};

export default Options;
