---
sidebar_position: 1
---

# Introduction

Welcome to the eTaxi documentation! This guide will help you set up and use eTaxi, a comprehensive ride-hailing platform.

## What is eTaxi?

eTaxi is a ride-hailing platform that connects passengers with drivers through mobile apps, featuring real-time booking, GPS tracking, multiple payment gateways, wallet system, and an admin panel for managing operations. The platform supports multiple ride types (Bike, Car, Premium, Rikshaw), city-wise fare configuration, driver matching algorithms, commission management, promo codes, referral system, and customer support tools to provide a complete taxi booking solution.

## Components

- **Admin Panel** - Complete administrative interface built with **Laravel** and **Filament** for managing users, drivers, rides, fare configurations, and platform operations
- **Backend API** - RESTful API backend built with **Laravel Framework 12.0** that powers mobile applications for both passengers and drivers

## Getting Started

The documentation is organized into several sections:

1. **Admin Panel Setup** - Instructions for setting up and configuring the Laravel Filament admin panel
2. **Backend API Setup** - Guide for setting up and configuring the Laravel backend API
3. **Support** - How to get help and contact information

Thank you for choosing eTaxi!

## Prerequisites

### For Backend (Admin Panel & API)

1. **PHP Version:** eTaxi backend is built using **Laravel Framework 12.0**, so you need PHP version **minimum 8.2 or higher** installed on your server.
2. **Database:** PostgreSQL with PostGIS extension (for spatial data support) or MySQL/MariaDB
3. **Composer:** PHP dependency manager
4. **Node.js & NPM:** Required because **Filament** uses Vite for compiling CSS and JavaScript assets. Filament requires Node.js for asset compilation during development and building production assets.

### For Mobile Application Development

1. **Flutter Version:** Flutter stable channel **3.35.0** SDK version
2. **Java Version:** JDK version **17** (for Android development)

**Note:** You can use either a **VPS server** or **shared hosting** for the backend, depending on your requirements. For production environments with high traffic, a VPS server is recommended for better performance and control.
