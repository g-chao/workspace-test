# PNPM Workspace Test
This repo demonstrate a issue in PNPM, where the installation involves multiple PNPM workspaces. 

## Folder structure
There are two workspaces on this repo.<br>
1. workspace2 has two libs `workspace2_lib1` and `workspace2_lib2`,  `workspace2_lib1` depends on `workspace2_lib2` through `link:`
2. workspace1 has one lib `workspace1_lib1`, `workspace1_lib1` depends on `workspace2_lib1`. Since `workspace2_lib1` is in another workspace, it uses the `file:` protocol (like the injected installation)

## Reproduce the issue
1. Delete both `pnpm-lock.yaml` in workspace1 and workspace2
2. Go to workspace2 folder, `pnpm install`
3. Go to workspace1 folder, `pnpm install`
4. Go to `workspace1/pacakges/workspace1_lib1`, run `node index.js` you will see the error.<br>
If you inspect the node_modules folder, eventually, you will find the `workspace2_lib2` installation in the PNPM store is wrong
