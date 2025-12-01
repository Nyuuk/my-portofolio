# Workflow Configuration Guide

This document explains how to customize the Docker build workflow by setting repository variables.

## How to Set Variables

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click on the **Variables** tab
4. Click **New repository variable**
5. Add the variable name and value
6. Click **Add variable**

## Available Configuration Variables

### Project Configuration

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `PROJECT_NAME` | `Portfolio` | Name of your project (used in Telegram messages) |

### Environment Labels

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `ENV_PRODUCTION_LABEL` | `Production 🏭` | Label for production environment |
| `ENV_DEVELOPMENT_LABEL` | `Development 🔧` | Label for development environment |

### Image Tag Configuration

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `IMAGE_TAG_SUFFIX` | `portfolio` | Suffix for Docker image tags |
| `IMAGE_TAG_LATEST` | `portfolio_latest` | Latest tag name for the image |

### Deployment Configuration

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `DEPLOY_WORKFLOW_FILE` | `deploy.yml` | Name of the deployment workflow file |
| `DEPLOY_WORKFLOW_BRANCH` | `main` | Branch where deployment workflow is located |
| `DEPLOY_TRIGGERED_BY` | `build-workflow` | Identifier for what triggered the deployment |

### Telegram Message Templates

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `TELEGRAM_MSG_BUILD_START_ICON` | `🔵` | Icon for build start messages |
| `TELEGRAM_MSG_BUILD_START_TITLE` | `Building Docker Image...` | Title for build start messages |
| `TELEGRAM_MSG_BUILD_SUCCESS_ICON` | `🟢` | Icon for build success messages |
| `TELEGRAM_MSG_BUILD_SUCCESS_TITLE` | `Build Completed Successfully` | Title for build success messages |
| `TELEGRAM_MSG_BUILD_FAILED_ICON` | `🔴` | Icon for build failure messages |
| `TELEGRAM_MSG_BUILD_FAILED_TITLE` | `Build Failed` | Title for build failure messages |
| `TELEGRAM_MSG_DEPLOY_TRIGGERED_ICON` | `🚀` | Icon for deployment triggered messages |
| `TELEGRAM_MSG_DEPLOY_TRIGGERED_TITLE` | `Deployment Triggered` | Title for deployment triggered messages |
| `TELEGRAM_MSG_DEPLOY_TRIGGERED_TEXT` | `Deployment workflow has been triggered...` | Text for deployment triggered messages |

## Example: Changing Project Name

To change the project name from "Portfolio" to "My Portfolio":

1. Go to **Settings** > **Secrets and variables** > **Actions** > **Variables**
2. Click **New repository variable**
3. Set:
   - **Name**: `PROJECT_NAME`
   - **Value**: `My Portfolio`
4. Click **Add variable**

Now all Telegram messages will show "My Portfolio" instead of "Portfolio".

## Example: Customizing Telegram Messages

To change the build success icon and title:

1. Set `TELEGRAM_MSG_BUILD_SUCCESS_ICON` to `✅`
2. Set `TELEGRAM_MSG_BUILD_SUCCESS_TITLE` to `Build Succeeded!`

## Example: Changing Image Tags

To use different image tag naming:

1. Set `IMAGE_TAG_SUFFIX` to `frontend` (instead of `portfolio`)
2. Set `IMAGE_TAG_LATEST` to `frontend_latest` (instead of `portfolio_latest`)

## Notes

- Variables are optional - if not set, default values will be used
- Changes to variables take effect on the next workflow run
- You can use emojis in variable values (e.g., `🚀`, `✅`, `❌`)
- Variable names are case-sensitive
- This workflow builds a single Docker image from the root directory
