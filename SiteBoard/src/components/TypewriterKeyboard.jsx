import { useCallback, useEffect, useState } from "react";
import TypewriterKey from "./TypewriterKey";
import UserTypingListener from "./UserTypingListener";

export default function TypewriterKeyboard() {

    return (
        <UserTypingListener />
    )
}