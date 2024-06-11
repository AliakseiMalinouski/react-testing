import React from "react";
import { useState } from "react";
import { Input } from "../input/Input";
import { Form } from "../form/Form";

const Content = () => {

    const [output, setOutput] = useState();

    const handleChange = (value) => {
        setOutput(value);
    }
    return (
        <div>
            <p data-testid="content-paragraph-test-id">Content</p>
            <div>{output}</div>
            <Input
                type={'text'}
                onChange={handleChange}
                placeholder={'input placholder'}
            />
            <Form/>
        </div>
    )
}

export {
    Content,
}
