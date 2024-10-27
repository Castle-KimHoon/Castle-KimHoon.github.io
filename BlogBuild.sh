#!/bin/bash

# 빌드 및 export
npm run build
npm run export

# Blog 폴더 생성 및 복사
mkdir -p Blog
cp -r out/* Blog/

# out 폴더 삭제
rm -rf out

# Git에 추가 및 커밋
git add Blog/*
git commit -m "Blog new version"

# 원격 저장소에 푸시
git push origin main

# Blog 폴더 삭제
rm -rf Blog
rm -rf .next
