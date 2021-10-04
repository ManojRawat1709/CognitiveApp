import React, { useState, useEffect, useContext } from 'react'

export const TestAlert = {
    success,
    error,
    info,
    warn,
    clear
};
const AlertType = {
    Success: 'success',
    Error: 'danger',
    Info: 'info',
    Warning: 'warning'
}

function success(message) {
    
}

function error(message, options) {
    
}

function info(message, options) {
    
}

function warn(message, options) {
    
}
function clear() {
    
}