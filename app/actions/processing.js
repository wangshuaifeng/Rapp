/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function resetProcessing () {
  return {
    type: 'reset_processing'
  }
}

export function processingTask (task) {
  return {
    type: 'processing_task',
    task
  }
}
