#!/bin/bash

# 设置变量
BUILD_COMMAND="yarn run build"  # 打包命令
SOURCE_DIR="dist"              # 要推送的目录
TARGET_REPO_URL="git@github.com:howardwzh/howardwzh.github.io.git" # GitHub 目标仓库地址
TARGET_BRANCH="master"         # 推送目标分支
COMMIT_MESSAGE="Update dist folder" # 提交信息

# 打印日志
echo "🚀 Starting deployment script..."

# 执行打包命令
echo "🏗️  Building the project..."
if ! $BUILD_COMMAND; then
  echo "❌ Build failed. Please check your build script."
  exit 1
fi

# 检查 dist 文件夹是否生成
if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "❌ Error: Directory '$SOURCE_DIR' does not exist after build."
  exit 1
fi

# 创建临时工作目录
TEMP_DIR=$(mktemp -d)
echo "📂 Created temporary directory: $TEMP_DIR"

# 克隆目标仓库的目标分支
echo "🔄 Cloning repository: $TARGET_REPO_URL (branch: $TARGET_BRANCH)"
git clone --branch "$TARGET_BRANCH" "$TARGET_REPO_URL" "$TEMP_DIR"

# 进入临时目录
cd "$TEMP_DIR"

# 复制 dist 文件夹内容到仓库目录
echo "📋 Copying built files to the repository..."
cp -r "../$SOURCE_DIR/"* ./

# 检查是否有变更
if git diff --quiet; then
  echo "✅ No changes detected. Deployment skipped."
  cd -
  rm -rf "$TEMP_DIR"
  exit 0
fi

# 提交变更
echo "📝 Committing changes..."
git add .
git commit -m "$COMMIT_MESSAGE"

# 推送到远程分支
echo "📤 Pushing changes to remote repository..."
if git push; then
  echo "✅ Deployment successful!"
else
  echo "❌ Deployment failed. Please check your remote repository and permissions."
fi

# 清理临时目录
cd -
rm -rf "$TEMP_DIR"
echo "🧹 Temporary directory cleaned up."
