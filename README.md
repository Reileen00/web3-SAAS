# Web3-SAAS
Building a web3 SAAS 
## Steps to follow
### Web2 steps:
1. Create a Node.js express backend
2. Create AWS credentials
3. Create 2 frontends
4. Design the schema
5. Support following adaptations:
  a. GET/generate Presigned URL
  b. Let users upload images via frontend 1
  c. POST/task
  d. GET/task
6. Support the endpoints of the other side:
  a. GET/next task
  b. POST/submission
  c. GET/balance
  d. POST/payout => dummy for now
### Web3 steps:
1. Let users sign in and link their wallet address to their account(signing messages).
2. Make user pay 50 dollars and generate a txn signature.
3. Make the backend verify the txn signature before creating a task.
4. Store the private key on the server.
5. Create and RPC server on alchemy.
6. Let the users request payout,submit the payouts on the blockchain and put the txn signature in the database.
7. Write the worker that polls the database and marks the entries as succeeded/failed/processing.


### Steps :
- ```npm i (modules)```
- ```npx prisma generate --schema```
- ```tsc -b```
- ```node dest/index.js```
