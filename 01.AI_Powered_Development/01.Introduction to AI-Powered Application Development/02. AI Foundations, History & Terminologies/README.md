# AI Foundations, History & Terminology

## 1. Understanding Intelligence

### 1.1 What Is Intelligence?

* Intelligence is the ability to understand situations, connect ideas, learn from experience, and solve problems to achieve a goal.
* Intelligence is more than memorizing facts; it involves adapting and making useful decisions.

### 1.2 Natural Intelligence

* Intelligence found in humans and animals.
* Combines memory, senses, emotions, creativity, logic, and social understanding.
* Flexible and general.

### 1.3 Artificial Intelligence

* Simulation of intelligent behavior by machines.
* Uses data, algorithms, statistical patterns, and mathematical models.
* Can perform tasks such as language understanding, image recognition, code generation, and recommendations.

### 1.4 AI in Everyday Life

* Recommendation systems
* Spam filters
* Navigation apps
* Code assistants
* Customer-support bots
* Semantic search

---

## 2. Brief History of AI

### 2.1 The Dream — 1950s

* **1950:** Alan Turing proposed the **Turing Test**.
* **1956:** The term **Artificial Intelligence** was introduced at the Dartmouth Conference.
* Early AI focused on **Symbolic AI** and hand-written rules.

### 2.2 AI Winters

* Early AI struggled with real-world complexity.
* Limited computing power and expensive hardware slowed progress.
* Funding and interest decreased, creating periods known as **AI Winters**.

### 2.3 Deep Learning Boom — 2010s

Two major factors:

* **Big Data:** Provided large amounts of training data.
* **GPUs:** Provided powerful parallel processing.

This allowed neural networks to learn complex patterns from data.

### 2.4 Transformer Era — 2017

* The paper **Attention Is All You Need** introduced the **Transformer architecture**.
* Transformers improved how models understand context and relationships in text.
* They became the foundation of many modern **Large Language Models (LLMs)**.

---

## 3. Types of AI & Key Concepts

### 3.1 AI → ML → DL → Generative AI

```text
Artificial Intelligence (AI)
        ↓
Machine Learning (ML)
        ↓
Deep Learning (DL)
        ↓
Generative AI
```

### 3.1.1 Artificial Intelligence (AI)

* The broadest concept.
* Enables computers to perform tasks that appear intelligent.
* Can be rule-based or learning-based.

### 3.1.2 Machine Learning (ML)

* A type of AI where systems learn patterns from data.
* Focus shifts from manually writing rules to providing data for the system to learn from.

### 3.1.3 Deep Learning (DL)

* A type of ML that uses multi-layer neural networks.
* Works especially well with images, audio, text, and video.

### 3.1.4 Generative AI

* A type of deep learning focused on creating new content.
* Can generate text, images, audio, and code.
* Examples include ChatGPT, Claude, Gemini, and image-generation tools.

---

## 3.2 The Model

### What Is an AI Model?

* A model is the **learned result of training**.
* It is different from the algorithm, application, or API.

### Training → Model → Inference

```text
Training → Learned Model → Inference → Output
```

* **Training:** Learning patterns from data.
* **Model:** Stores the learned patterns.
* **Inference:** Uses the model to process new input and produce an output.

### Types of Models

* **Language Models:** Text and code
* **Vision Models:** Images and video
* **Audio Models:** Speech and sound
* **Multimodal Models:** Multiple types of input/output

---

## 3.3 Levels of Intelligence

### 3.3.1 ANI — Artificial Narrow Intelligence

* Designed for specific tasks.
* Most AI systems today are considered ANI.
* Examples: recommendation systems, navigation, facial recognition, and current LLMs.

### 3.3.2 AGI — Artificial General Intelligence

* Theoretical AI capable of performing a wide range of intellectual tasks at a human level.
* Not currently achieved.

### 3.3.3 ASI — Artificial Superintelligence

* Theoretical AI that would surpass human intelligence across many areas.
* Currently speculative.

### 3.3.4 Foundation Models

* Large general-purpose models trained on broad datasets.
* Can be adapted to many tasks using prompts, tools, retrieved data, or fine-tuning.

---

## 4. How LLMs Work

### 4.1 Next-Token Prediction

* LLMs generate text by predicting the **next token** repeatedly.
* They use the prompt and previous tokens as context.

```text
Prompt → Predict Token → Add Token → Predict Again → Output
```

### 4.2 Tokens

* Text is divided into smaller pieces called **tokens**.
* A token can be a word, part of a word, punctuation, or other text unit.
* More tokens generally mean more processing and potentially higher cost.

### 4.3 Context Window

* The amount of information an LLM can consider in one request.
* Can include instructions, messages, documents, examples, and retrieved data.

### 4.4 Temperature

Controls how predictable or creative the output is:

* **Low:** More stable and predictable
* **Medium:** Balanced
* **High:** More creative and varied

### 4.5 Hallucinations

* A hallucination occurs when an AI generates information that sounds confident but is incorrect or unsupported.
* AI-generated information should therefore be **verified and tested**.

---

## 5. AI for Developers

### 5.1 AI Coding Assistants

AI can help developers with:

* Code generation
* Debugging
* Refactoring
* Explanations
* Boilerplate
* Test cases

### 5.2 Using AI Responsibly

* Ask for explanations before blindly accepting code.
* Give clear instructions.
* Provide relevant project context.
* Test generated code yourself.
* Never accept code you cannot explain.

### 5.3 The Co-Pilot Rule

> **AI is a co-pilot, not the captain.**

The developer remains responsible for understanding the code, debugging problems, testing the application, and making technical decisions.
