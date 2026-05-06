package auth

default allow := false

allow if{
  input.user.role == "admin"
}