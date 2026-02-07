'use client'

import { useState } from 'react'
import { BookOpen, Clock, CheckCircle, Zap, Server, Brain, Code, Database, Shield, Sparkles } from 'lucide-react'

interface Skill {
  id: string
  title: string
  category: string
  duration: string
  description: string
  keyPoints: string[]
  icon: React.ReactNode
  newThisMonth: boolean
}

const skills: Skill[] = [
  {
    id: '1',
    title: 'MCP: Model Context Protocol',
    category: 'Architecture',
    duration: '8 min',
    description: 'Anthropic\'s open standard for connecting AI assistants to data sources and tools. Released Dec 2024, rapidly becoming the industry standard.',
    keyPoints: [
      'Standardized way to expose context, prompts, and tools to LLMs',
      'Works with Claude, OpenAI, and other major models',
      'Replaces custom tool calling implementations',
      'Built-in capabilities: resources, prompts, tools, sampling'
    ],
    icon: <Server size={20} />,
    newThisMonth: true
  },
  {
    id: '2',
    title: 'DeepSeek-R1 Reasoning',
    category: 'Models',
    duration: '6 min',
    description: 'Open-source reasoning model from DeepSeek that rivals OpenAI o1. Released Jan 2025, completely free and open weights.',
    keyPoints: [
      'MIT licensed - free for commercial use',
      '32B parameter model outperforms GPT-4 on reasoning tasks',
      'Visible chain-of-thought reasoning',
      'Can be run locally or via API'
    ],
    icon: <Brain size={20} />,
    newThisMonth: true
  },
  {
    id: '3',
    title: 'Gemini 2.0 Flash',
    category: 'Models',
    duration: '5 min',
    description: 'Google\'s latest multimodal model with 1M token context window. Released Dec 2024, 2x faster than 1.5 Pro.',
    keyPoints: [
      'Native image, audio, and video understanding',
      '1 million token context window',
      'Real-time streaming capabilities',
      'Free tier available with generous limits'
    ],
    icon: <Zap size={20} />,
    newThisMonth: true
  },
  {
    id: '4',
    title: 'OpenAI o3 & o3-mini',
    category: 'Models',
    duration: '7 min',
    description: 'Next-gen reasoning models announced Dec 2024. o3-mini is already available, full o3 coming soon.',
    keyPoints: [
      'Significant leap in coding and reasoning benchmarks',
      'Adjustable reasoning effort (low/medium/high)',
      'o3-mini offers great performance at lower cost',
      'Excels at math, science, and code generation'
    ],
    icon: <Sparkles size={20} />,
    newThisMonth: true
  },
  {
    id: '5',
    title: 'Codex CLI & Claude Code',
    category: 'Tools',
    duration: '10 min',
    description: 'Autonomous coding agents that can write, test, and deploy code. Released late 2024/early 2025.',
    keyPoints: [
      'Codex CLI: OpenAI\'s official coding agent',
      'Claude Code: Anthropic\'s terminal-based coding partner',
      'Both can run tests, git commands, and deploy',
      'Sandboxed execution for safety'
    ],
    icon: <Code size={20} />,
    newThisMonth: true
  },
  {
    id: '6',
    title: 'Hybrid RAG & sqlite-vec',
    category: 'Architecture',
    duration: '9 min',
    description: 'New approaches to vector search combining BM25 + embeddings. sqlite-vec brings vectors to SQLite.',
    keyPoints: [
      'Hybrid search: combine keyword + semantic search',
      'sqlite-vec: run vector search without external DB',
      'Better chunking with hierarchical strategies',
      'Reranking with cross-encoders for accuracy'
    ],
    icon: <Database size={20} />,
    newThisMonth: false
  },
  {
    id: '7',
    title: 'Agent Authentication & Safety',
    category: 'Security',
    duration: '6 min',
    description: 'New patterns for securing AI agents: tool confirmation flows, human-in-the-loop, and audit logging.',
    keyPoints: [
      'Tiered permission systems (read → write → execute)',
      'Require confirmation for destructive operations',
      'Session-based tool access with timeouts',
      'Comprehensive logging for agent actions'
    ],
    icon: <Shield size={20} />,
    newThisMonth: false
  },
  {
    id: '8',
    title: 'LangGraph 0.2 & State Machines',
    category: 'Frameworks',
    duration: '8 min',
    description: 'Latest LangGraph updates for building complex agent workflows with persistence and human-in-the-loop.',
    keyPoints: [
      'Built-in persistence across conversation turns',
      'Human-in-the-loop breakpoints',
      'Time-travel debugging capabilities',
      'Streaming support for real-time updates'
    ],
    icon: <BookOpen size={20} />,
    newThisMonth: true
  }
]

const categories = ['All', 'Architecture', 'Models', 'Tools', 'Frameworks', 'Security']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [completed, setCompleted] = useState<string[]>([])
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory)

  const toggleComplete = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      {/* Header */}
      <header style={{ 
        padding: '24px 32px', 
        borderBottom: '1px solid #222',
        background: '#0a0a0f'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: 8, 
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Zap size={24} color="#fff" />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>AI Skills Hub</h1>
              <p style={{ margin: 0, fontSize: 14, color: '#888' }}>Micro-learning for the latest in AI • Updated Feb 2025</p>
            </div>
          </div>

          {/* Progress */}
          <div style={{ 
            marginTop: 20, 
            padding: 16, 
            background: '#141418', 
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 14, color: '#888' }}>Your Progress</p>
              <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
                {completed.length} / {skills.length} skills completed
              </p>
            </div>
            <div style={{ 
              width: 120, 
              height: 8, 
              background: '#222', 
              borderRadius: 4,
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(completed.length / skills.length) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                borderRadius: 4,
                transition: 'width 0.3s'
              }} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
        {/* Category Filter */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: 'none',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: selectedCategory === cat ? '#6366f1' : '#222',
                color: '#fff'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20 
        }}>
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              style={{
                padding: 24,
                background: '#141418',
                borderRadius: 16,
                border: '1px solid #222',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative'
              }}
            >
              {skill.newThisMonth && (
                <span style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  padding: '4px 10px',
                  background: '#22c55e',
                  color: '#000',
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 12
                }}>
                  NEW
                </span>
              )}
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12, 
                marginBottom: 16 
              }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 10, 
                  background: '#222',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1'
                }}>
                  {skill.icon}
                </div>
                <div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: 12, 
                    color: '#6366f1',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: 0.5
                  }}>
                    {skill.category}
                  </p>
                  <p style={{ margin: '2px 0 0', fontSize: 13, color: '#888', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} />
                    {skill.duration}
                  </p>
                </div>
              </div>

              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>
                {skill.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: '#aaa', lineHeight: 1.6 }}>
                {skill.description}
              </p>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginTop: 16,
                paddingTop: 16,
                borderTop: '1px solid #222'
              }}>
                <span style={{ fontSize: 13, color: '#6366f1', fontWeight: 500 }}>
                  Click to learn →
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleComplete(skill.id)
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    border: '2px solid #333',
                    background: completed.includes(skill.id) ? '#22c55e' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {completed.includes(skill.id) && <CheckCircle size={18} color="#fff" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div 
            onClick={() => setSelectedSkill(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32,
              zIndex: 100
            }}
          >
            <div 
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: 600,
                maxHeight: '80vh',
                overflow: 'auto',
                background: '#141418',
                borderRadius: 20,
                padding: 32,
                border: '1px solid #333'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 12, 
                  background: '#222',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366f1'
                }}>
                  {selectedSkill.icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: '#6366f1', textTransform: 'uppercase', fontWeight: 600 }}>
                    {selectedSkill.category}
                  </p>
                  <h2 style={{ margin: '4px 0 0', fontSize: 24, fontWeight: 700 }}>
                    {selectedSkill.title}
                  </h2>
                </div>
              </div>

              <p style={{ fontSize: 16, color: '#ccc', lineHeight: 1.7, marginBottom: 24 }}>
                {selectedSkill.description}
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Key Points</h3>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {selectedSkill.keyPoints.map((point, i) => (
                  <li 
                    key={i}
                    style={{
                      padding: '12px 0',
                      borderBottom: i < selectedSkill.keyPoints.length - 1 ? '1px solid #222' : 'none',
                      display: 'flex',
                      gap: 12,
                      fontSize: 15,
                      color: '#ddd'
                    }}
                  >
                    <span style={{ color: '#22c55e', fontWeight: 600 }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  toggleComplete(selectedSkill.id)
                  setSelectedSkill(null)
                }}
                style={{
                  width: '100%',
                  marginTop: 24,
                  padding: 14,
                  borderRadius: 10,
                  border: 'none',
                  background: completed.includes(selectedSkill.id) ? '#333' : '#6366f1',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {completed.includes(selectedSkill.id) ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}