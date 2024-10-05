#!/bin/bash

# 빌드 및 export
npm run build
npm run export

# public 폴더 생성 및 복사
mkdir -p public
cp -r out/* public/

# out 폴더 삭제
rm -rf out

# Git에 추가 및 커밋
git add public/*
git commit -m "Deploy new version"

# 원격 저장소에 푸시
git push origin main
