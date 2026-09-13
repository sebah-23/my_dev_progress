# 🤖 AI Architecture, Model Selection & Terminology

A practical guide to understanding the **architecture, terminology, model controls, model selection, and prompt engineering techniques** behind modern AI-powered applications.

This documentation is designed for AI builders and developers who want to understand what happens behind an AI application—from the moment a user sends a prompt to the moment the AI generates a response.

---

## 📚 Contents

1. [Anatomy of an AI Application](#1-anatomy-of-an-ai-application)

   * [The Brain — LLM API](#11-the-brain--llm-api)
   * [The Backend — Orchestrator](#12-the-backend--orchestrator)
   * [The Frontend — Interface](#13-the-frontend--interface)
2. [Essential AI Terminology](#2-essential-ai-terminology)

   * [Context Window](#21-context-window)
   * [Tokens](#22-tokens)
   * [Parameters / Weights](#23-parameters--weights)
   * [Inference & Performance](#24-inference--performance)
3. [Controlling the Model](#3-controlling-the-model)

   * [Temperature](#31-temperature)
   * [Top-k](#32-top-k)
   * [Top-p](#33-top-p-nucleus-sampling)
   * [Putting the Controls Together](#34-putting-the-controls-together)
4. [Model Selection Strategy](#4-model-selection-strategy)

   * [Parameter Size](#41-parameter-size)
   * [Context Window](#42-context-window)
   * [Modality](#43-modality)
   * [Capability & Pricing](#44-capability--pricing)
   * [Proprietary vs Open Source](#45-proprietary-vs-open-source)
5. [Prompt Engineering Strategies](#5-prompt-engineering-strategies)

   * [Understanding Prompts](#51-understanding-prompts)
   * [Zero-shot Prompting](#52-zero-shot-prompting)
   * [Few-shot Prompting](#53-few-shot-prompting)
   * [Chain-of-Thought Prompting](#54-chain-of-thought-prompting)
   * [System vs User Prompts](#55-system-vs-user-prompts)

---

# 1. Anatomy of an AI Application

A modern AI application can be understood as three main layers:

```text
┌──────────────────────────┐
│        Frontend          │
│   User Interface (UI)    │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│         Backend          │
│ Authentication, Logic,   │
│ Prompts & API Handling   │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        LLM API            │
│      AI / Model Layer     │
└──────────────────────────┘
```

### 🍽️ Restaurant Analogy

An easy way to understand this architecture is to imagine a high-end restaurant:

* **Chef → AI Model:** prepares the final response.
* **Waiter → Backend:** receives the customer's request, checks what is allowed, and sends the correct instructions to the chef.
* **Dining Room → Frontend:** the place where the customer interacts with the application and sees the result.

The user never directly interacts with the underlying AI model. The frontend communicates with the backend, and the backend communicates with the AI service.

---

## 1.1 The Brain — LLM API

The **Large Language Model (LLM)** provides the intelligence behind the application.

Services such as OpenAI, Anthropic, and Google provide access to their models through APIs. The application sends information such as the user's prompt and conversation context to the API, and the model returns a generated response.

For example:

```text
User Prompt
    ↓
Backend
    ↓
LLM API
    ↓
AI Model
    ↓
Generated Response
    ↓
Backend
    ↓
Frontend
```

Models such as GPT, Gemini, and Claude operate behind APIs.

The model does not directly know the user or application. It only processes the instructions and data that the application sends to it.

---

## 1.2 The Backend — Orchestrator

The backend acts as the **orchestrator** of the AI application.

It is commonly built using technologies such as:

* Node.js / Express
* FastAPI
* Other backend frameworks

The backend can be responsible for:

* **Prompt Engineering** — preparing and structuring prompts before sending them to the model.
* **Authentication** — verifying users and controlling access.
* **Guardrails** — filtering unsafe or unwanted inputs and outputs.
* **API Communication** — communicating with the selected AI provider.
* **Asynchronous Tasks** — handling longer-running AI operations.
* **Application Logic** — connecting the AI functionality with the rest of the application.

### Example

A user might say:

> "I want that spicy thing I had last time."

The backend can transform this vague request into structured information before sending it to another service.

This is why the backend is more than simply a connection between the frontend and the AI model—it controls how the application communicates with the model.

---

## 1.3 The Frontend — Interface

The frontend is the part of the application that users directly interact with.

It provides features such as:

* Chat interfaces
* Input fields
* Buttons
* Conversation history
* Loading indicators
* AI-generated responses
* Error messages

Modern AI applications may also use **real-time streaming**.

Instead of waiting for the entire response, the frontend can receive and display the generated response progressively, creating a natural typing effect.

One common approach is **Server-Sent Events (SSE)**.

---

# 2. Essential AI Terminology

Understanding AI applications requires familiarity with several important concepts.

---

## 2.1 Context Window

The **context window** is the amount of information, measured in tokens, that a model can process as part of a request.

A larger context window allows the model to work with more information at once.

For example, a large context window can be useful for:

* Long conversations
* Large documents
* Research papers
* Large codebases
* Multiple documents
* Long transcripts

A very large context window can handle significantly more information than a smaller one.

### Why It Matters

When building an AI application, the context window affects how much conversation history or external information can be sent to the model.

Therefore, the maximum expected input size should be considered when selecting a model.

---

## 2.2 Tokens

A **token** is a small unit of text processed by an AI model.

A token may represent:

* A complete word
* Part of a word
* Punctuation
* Other pieces of text

In English, one token is roughly three-quarters of a word, although the exact number varies depending on the text.

### Why Tokens Matter

Tokens are important because they affect:

* Model input limits
* Context window usage
* API costs
* Conversation history
* Response length

For AI applications, text length is therefore closely connected to token usage.

---

## 2.3 Parameters / Weights

**Parameters**, also called weights, are the internal values learned by a model during training.

They help determine how the model processes information and generates responses.

For example:

```text
7B parameters
70B parameters
400B+ parameters
```

The `B` means **billion**.

Generally:

* Smaller models are faster and cheaper.
* Larger models can provide stronger capabilities.
* Very large models require significantly more computing resources.

For example, a smaller model may be suitable for simple classification or summarization, while a larger model may be preferred for complex reasoning or coding tasks.

---

## 2.4 Inference & Performance

**Inference** is the process of using a trained AI model to generate an output.

Training happens during the model-development process, while inference happens every time an application asks the model to produce a response.

```text
Training
   ↓
Trained Model
   ↓
Inference
   ↓
Generated Response
```

### Latency vs Throughput

Two important performance concepts are:

**Latency**
How long it takes for an individual request to receive a response.

**Throughput**
How many requests a system can process over a period of time.

Different applications prioritize different performance characteristics.

For example:

* A chatbot usually benefits from **low latency**.
* A large document-processing system may prioritize **high throughput**.

---

# 3. Controlling the Model

AI models have controls that influence how they generate responses.

Three commonly discussed sampling controls are:

* Temperature
* Top-k
* Top-p

These controls influence how the model chooses the next token.

```text
                Model
                  │
                  ▼
          Probability Distribution
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   Temperature  Top-k     Top-p
        │         │         │
        └─────────┼─────────┘
                  ▼
           Selected Token
```

---

## 3.1 Temperature

**Temperature** controls how predictable or varied the model's output is.

A lower temperature generally produces more predictable responses.

A higher temperature generally allows more variation and creativity.

### General idea

| Temperature | Typical Behavior             |
| ----------- | ---------------------------- |
| Low         | More predictable and focused |
| Medium      | Balanced                     |
| High        | More creative and varied     |

For example:

* **Coding / factual tasks:** lower temperature
* **Creative writing:** higher temperature
* **General conversation:** balanced temperature

---

## 3.2 Top-k

**Top-k** limits the model's next-token choices to the `k` most probable candidates.

For example, if:

```text
k = 5
```

the model considers only the five most probable candidates.

A smaller `k` creates a narrower candidate pool, while a larger `k` allows more possibilities.

### Simple Example

For:

> "I like to drink..."

A small candidate pool might contain:

```text
water
coffee
tea
juice
milk
```

A larger candidate pool could include more unusual possibilities.

### Simple Analogy

Think of a restaurant menu:

* **Small k →** only the most popular dishes.
* **Large k →** a larger menu with more choices.

---

## 3.3 Top-p — Nucleus Sampling

**Top-p** selects the smallest group of possible tokens whose combined probability reaches a specified threshold.

Unlike Top-k, the number of candidates can change depending on the probability distribution.

For example:

```text
p = 0.90
```

means the model considers the smallest group of candidates whose combined probability reaches approximately 90%.

Top-p is therefore more dynamic than Top-k.

---

## 3.4 Putting the Controls Together

Different tasks can benefit from different settings.

| Task                 |     Temperature |           Top-p |
| -------------------- | --------------: | --------------: |
| Coding / Factual Q&A |      Low (~0.2) | Moderate (~0.8) |
| Creative Writing     |   Higher (~0.8) |  Higher (~0.95) |
| General Chat         | Balanced (~0.5) | Moderate (~0.9) |

These values should be treated as starting points rather than universal rules.

The best configuration depends on the model and application.

---

# 4. Model Selection Strategy

Choosing an AI model is similar to choosing an engine for a vehicle.

You want enough power for the task without unnecessarily increasing cost and resource requirements.

Several factors should be considered when selecting a model.

---

## 4.1 Parameter Size

Model size can influence capability, speed, and resource requirements.

### Smaller Models

Examples:

```text
7B – 8B
```

Good for tasks such as:

* Simple chatbots
* Classification
* Summarization
* Basic text generation

### Larger Models

Examples:

```text
70B+
```

Useful for more demanding tasks such as:

* Complex reasoning
* Advanced coding
* Difficult logic problems

### Very Large Models

Examples:

```text
400B+
```

These can provide extremely strong capabilities but generally require much more infrastructure and cost.

---

## 4.2 Context Window

The model's context window should match the amount of information your application needs to process.

| Context Size       | Suitable For                              |
| ------------------ | ----------------------------------------- |
| ~8K                | Normal conversations and short documents  |
| 100K+              | Long documents and multiple files         |
| Very large context | Large codebases and extensive transcripts |

For example, an application designed to analyze large research documents needs a model with a sufficiently large context window.

---

## 4.3 Modality

**Modality** refers to the types of information a model can understand or generate.

### Text-only

Works primarily with text.

```text
Text → Model → Text
```

### Multimodal

Can work with multiple types of input, such as:

* Text
* Images
* Audio
* Sometimes video

For example:

```text
Image + Text
      ↓
Multimodal Model
      ↓
Text Response
```

If an application needs to analyze screenshots, images, or visual PDFs, a vision-capable model is required.

---

## 4.4 Capability & Pricing

Different models can be better suited to different tasks.

When selecting a model, consider:

* Reasoning capability
* Coding performance
* Response quality
* Speed
* Context size
* API pricing
* Expected number of users

A common strategy is to use a less expensive model for routine requests and reserve more powerful models for complex tasks.

This can help balance:

```text
Quality + Speed + Cost
```

---

## 4.5 Proprietary vs Open Source

There are two major approaches to using AI models.

|                | Proprietary         | Open Source                                         |
| -------------- | ------------------- | --------------------------------------------------- |
| Examples       | GPT, Gemini, Claude | Llama, Mistral, Gemma                               |
| Integration    | Usually easier      | More infrastructure required                        |
| Control        | Less                | More                                                |
| Infrastructure | Provider-managed    | Usually self-managed                                |
| API Cost       | Ongoing usage costs | Can avoid API fees, but infrastructure costs remain |
| Complexity     | Lower               | Higher                                              |

### Proprietary Models

Advantages:

* Easy integration
* Highly capable models
* Provider-managed infrastructure
* Easier scaling

Disadvantages:

* Ongoing API costs
* Less control over infrastructure

### Open-Source Models

Advantages:

* More control
* Greater customization possibilities
* Can be self-hosted

Disadvantages:

* Requires infrastructure
* GPU and server management may be necessary
* More technical complexity

For learning and building features quickly, using a managed AI API can allow developers to focus more on the application itself rather than maintaining model infrastructure.

---

# 5. Prompt Engineering Strategies

**Prompt engineering** is the process of designing and structuring instructions given to an AI model to produce useful, accurate, and relevant results.

A prompt can significantly influence the quality of an AI application's output.

---

## 5.1 Understanding Prompts

A **prompt** is the input or instruction provided to an AI model.

Different prompts can be structured in different ways.

| Prompt Type   | Description                    | Example                            |
| ------------- | ------------------------------ | ---------------------------------- |
| Direct        | Clear and specific instruction | "Write a poem about nature."       |
| Open-ended    | Allows more exploration        | "Tell me about the universe."      |
| Task-specific | Designed for a particular goal | "Translate this text into French." |

Good prompts generally make the desired task clear and provide the model with the necessary context.

---

## 5.2 Zero-shot Prompting

**Zero-shot prompting** asks the model to perform a task without providing examples.

The model relies on its existing knowledge and understanding of the instruction.

### Example

```text
Explain climate change, its causes,
and its effects in simple terms.
```

No examples are provided.

This approach is useful when the task is straightforward and the expected output is easy for the model to understand.

---

## 5.3 Few-shot Prompting

**Few-shot prompting** provides examples before asking the model to perform the actual task.

### Example

```text
Explain topics in simple terms.

Example 1:
Topic: Photosynthesis
Explanation: Photosynthesis is how plants use sunlight,
water, and air to make their own food.

Example 2:
Topic: Gravity
Explanation: Gravity is the force that pulls things
toward each other, like keeping us on the ground.

Now explain:

Topic: Climate Change
Explanation:
```

The examples show the model the desired format and style.

Few-shot prompting is useful when the expected output has a specific structure or style.

---

## 5.4 Chain-of-Thought Prompting

**Chain-of-thought prompting** encourages a model to approach a problem through multiple steps.

For example:

```text
Explain climate change step by step.

Step 1: Define climate change.
Step 2: Explain the main causes.
Step 3: Describe its effects.
Step 4: Give a simple conclusion.
```

This structure can help organize complex tasks into smaller components.

The general idea is:

```text
Complex Task
     ↓
Break Into Smaller Steps
     ↓
Process Each Part
     ↓
Produce Final Answer
```

---

## 5.5 System vs User Prompts

AI applications commonly distinguish between **system instructions** and **user requests**.

### System Prompt

The system prompt defines the model's overall behavior, rules, or role.

Example:

```text
You are a helpful Python tutor.
Explain concepts using simple analogies
and provide clear code examples.
```

The system instruction establishes how the assistant should behave.

### User Prompt

The user prompt contains the user's specific request.

Example:

```text
Explain what a Python decorator is.
```

### Together

```text
System Prompt
      ↓
Defines behavior
      ↓
User Prompt
      ↓
Specific task
      ↓
AI Response
```

System prompts are particularly useful when an application needs consistent behavior across many conversations.

For example, a customer-support chatbot can use a system prompt to define:

* Tone
* Supported topics
* Topics to avoid
* Response format
* Error-handling behavior

---
