// new user connects
export const newUserConnectedEventType = '[User] new user connected' as const;
export const newUserConnectedEvent = (userId: string) => ({
  type: newUserConnectedEventType,
  userId,
});
export type NewUserConnectedEvent = ReturnType<typeof newUserConnectedEvent>;
export const isNewUserConnectedEvent = (event: {
  type: string;
}): event is NewUserConnectedEvent => event.type === newUserConnectedEventType;

// user disconnects
export const userDisconnectedEventType = '[User] user disconnected' as const;
export const userDisconnectedEvent = (userId: string) => ({
  type: userDisconnectedEventType,
  userId,
});
export type UserDisconnectedEvent = ReturnType<typeof userDisconnectedEvent>;
export const isUserDisconnectedEvent = (event: {
  type: string;
}): event is UserDisconnectedEvent => event.type === userDisconnectedEventType;

// user requests name change
export const userRequestsNameChangeEventType =
  '[User] user requests name change' as const;
export const userRequestsNameChangeEvent = (
  userId: string,
  newName: string
) => ({
  type: userDisconnectedEventType,
  userId,
  newName,
});
export type UserRequestsNameChangeEvent = ReturnType<typeof userRequestsNameChangeEvent>;
export const isUserRequestsNameChangeEvent = (event: {
  type: string;
}): event is UserDisconnectedEvent => event.type === userDisconnectedEventType;
```