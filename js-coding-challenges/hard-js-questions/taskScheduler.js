class TaskScheduler {
  constructor(concurrency) {
    this.concurrency = Number(concurrency)
    this.runningTasks = 0
    this.waitingQueue = []
  }

  getNextTask() {
    if (this.runningTasks < this.concurrency && this.waitingQueue.length > 0) {
      const nextTask = this.waitingQueue.shift()
      nextTask()
    }
  }

  addTask(task) {
    const taskRunner = async () => {
      this.runningTasks += 1
      try {
        const result = await task()
        console.log(`Result ${result}`)
      } catch (error) {
        console.log(`Error $${err}`)
      } finally {
        this.runningTasks -= 1
        this.getNextTask()
      }
    }

    if (this.runningTasks < this.concurrency) {
      taskRunner()
    } else {
      this.waitingQueue.push(taskRunner)
    }
  }
}

const scheduler = new TaskScheduler(2)

scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res('Task 1'), 2 * 1000)),
)
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res('Task 2'), 2 * 1000)),
)
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res('Task 3'), 2 * 1000)),
)
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res('Task 4'), 2 * 1000)),
)
