# PNPM Workspace Test
This repo demonstrate a issue in PNPM, where the installation involves using `file:` protocol. 

## Folder structure
There are two workspaces on this repo.<br>
1. workspace1 has a lib `workspace1_lib1`, `workspace1_lib1` depends on `workspace2_lib1`. Since `workspace2_lib1` is in another workspace, it uses the `file:` protocol (like the injected installation)
2. workspace2 has two libs `workspace2_lib1` and `workspace2_lib2`,  `workspace2_lib1` depends on `workspace2_lib2` through `link:` protocol

## Reproduce the issue
1. Delete both `pnpm-lock.yaml` in workspace1 and workspace2
2. Go to workspace2 folder, `pnpm install`, everything should works as excepted
3. Go to workspace1 folder, `pnpm install`, you will see the installation completed with a warning like below. This is because `workspace2_lib1` and `workspace2_lib2` are not belong to `workspace1`, so the path resolving logic may not be correct. 
```
 WARN  Installing a dependency from a non-existent directory: /Users/chao/Documents/OpenSource/rush-test/workspace-test/workspace2_lib2
```
4. Go to `workspace1/pacakges/workspace1_lib1`, run `node index.js` you will see `MODULE_NOT_FOUND` error.<br>
If you inspect the node_modules folder, eventually, you will find the `workspace2_lib2` installation in the PNPM store is wrong
