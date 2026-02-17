import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Message } from '../backend';
import { toast } from 'sonner';

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (message: Message) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitMessage(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours."
      });
    },
    onError: (error: Error) => {
      console.error('Failed to submit message:', error);
      toast.error('Failed to send message', {
        description: error.message || 'Please try again or contact us directly.'
      });
    }
  });
}
